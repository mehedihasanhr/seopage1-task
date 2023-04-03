export const outsideClick = (e, ref, cb) => {
  if (ref.current && !ref.current.contains(e.target)) {
    cb();
    return;
  }
};
