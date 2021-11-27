import VanillaLongPress, { Input } from 'vanilla-long-press';

class LongPress {
  public install(app: any) {
    app.directive('long-press', {
      mounted(el: HTMLInputElement, binding: { value: () => void }) {
        new VanillaLongPress(el, binding.value, 200);
      },
      beforeUnmount(el: Input) {
        el._longPressDestroy();
      },
    });
  }
}

export default new LongPress();
