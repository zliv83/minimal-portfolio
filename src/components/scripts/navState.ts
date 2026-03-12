function dispatch(isOpen: boolean) {
  window.dispatchEvent(new CustomEvent('nav:toggle', { detail: { isOpen } }));
}

export const navState = {
  isOpen: false,
  toggle() {
    this.isOpen = !this.isOpen;
    dispatch(this.isOpen);
  },
};
