// Word-level diff (longest common subsequence) used by the prompt morph slider.
// Returns ops in reading order: { type: "same" | "del" | "add", word }.

export function tokenize(text) {
    return text.replace(/\n/g, " \n ").split(/ +/).filter(Boolean);
}

// Compare words loosely (case and punctuation ignored) so "better?" still matches "better".
const norm = (w) => w.toLowerCase().replace(/[^\p{L}\p{N}#]+/gu, "") || w;

export function wordDiff(beforeText, afterText) {
    const a = tokenize(beforeText);
    const b = tokenize(afterText);
    const na = a.map(norm);
    const nb = b.map(norm);
    const n = a.length;
    const m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
    for (let i = n - 1; i >= 0; i -= 1) {
        for (let j = m - 1; j >= 0; j -= 1) {
            dp[i][j] = na[i] === nb[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
        }
    }
    const ops = [];
    let i = 0;
    let j = 0;
    while (i < n && j < m) {
        if (na[i] === nb[j]) {
            ops.push({ type: "same", word: a[i], wordAfter: b[j] });
            i += 1;
            j += 1;
        } else if (dp[i + 1][j] >= dp[i][j + 1]) {
            ops.push({ type: "del", word: a[i] });
            i += 1;
        } else {
            ops.push({ type: "add", word: b[j] });
            j += 1;
        }
    }
    while (i < n) ops.push({ type: "del", word: a[i++] });
    while (j < m) ops.push({ type: "add", word: b[j++] });

    let k = 0;
    const keyed = ops.map((op, idx) => ({
        ...op,
        key: op.type === "same" ? `s${k++}` : `${op.type[0]}${idx}`,
    }));
    const same = keyed.filter((o) => o.type === "same").length;
    return {
        ops: keyed,
        beforeCount: n,
        afterCount: m,
        added: keyed.filter((o) => o.type === "add").length,
        removed: keyed.filter((o) => o.type === "del").length,
        similarity: same / Math.max(n, m, 1),
        retained: same / Math.max(n, 1),
    };
}
