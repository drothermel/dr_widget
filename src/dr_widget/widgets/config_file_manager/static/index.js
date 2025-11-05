function CD(o, s) {
  return {
    [umn()]: (h) => xD(o) ? (o.current = h, Wg(() => s == null ? void 0 : s(h)), () => {
      "isConnected" in h && h.isConnected || (o.current = null);
    }) : (o(h), Wg(() => s == null ? void 0 : s(h)), () => {
      "isConnected" in h && h.isConnected || o(null);
    })
  };
}
