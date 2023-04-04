export const isMobile = () => {
  if (window.innerWidth < 720) {
    return true;
  }

  return false;
};
