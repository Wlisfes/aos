/**
 * AOS (Animate on scroll) - TypeScript definitions
 */

export as namespace AOS;

// Export individual functions to support named imports
export function init(options?: AOS.AosOptions): AOS.AosElement[];
export function refresh(initialize?: boolean): void;
export function refreshHard(): void;
export function disable(): void;
export function isDisabled(optionDisable: AOS.AosOptions['disable']): boolean;
export function handleScroll(elements: AOS.AosElement[], top?: number): void;
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: {
    leading?: boolean;
    trailing?: boolean;
  }
): T;
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): T;

declare namespace AOS {
  /**
   * AOS initialization options
   */
  interface AosOptions {
    /**
     * Offset (in px) from the original trigger point
     * @default 120
     */
    offset?: number;

    /**
     * Delay (in ms) for animations
     * @default 0
     */
    delay?: number;

    /**
     * Animation easing function
     * @default 'ease'
     */
    easing?: string;

    /**
     * Animation duration (in ms)
     * @default 400
     */
    duration?: number;

    /**
     * Disables AOS
     * - true: all animations are disabled
     * - 'phone': animations are disabled on phones
     * - 'tablet': animations are disabled on tablets
     * - 'mobile': animations are disabled on mobile devices (phones + tablets)
     * - function: custom callback returning true/false depending on viewport
     * @default false
     */
    disable?: boolean | 'phone' | 'tablet' | 'mobile' | (() => boolean);

    /**
     * Whether animation should happen only once - when element comes into view
     * @default false
     */
    once?: boolean;

    /**
     * Whether elements should animate out while scrolling down
     * @default false
     */
    mirror?: boolean;

    /**
     * Whether to trigger animations on resize
     * @default true
     */
    resize?: boolean;

    /**
     * Whether to trigger animations on scroll
     * @default true
     */
    scroll?: boolean;

    /**
     * Defines which position of the element regarding the viewport will trigger the animation
     * @default 'top-bottom'
     */
    anchorPlacement?: 
      | 'top-bottom' 
      | 'top-center' 
      | 'top-top' 
      | 'center-bottom' 
      | 'center-center' 
      | 'center-top' 
      | 'bottom-bottom' 
      | 'bottom-center' 
      | 'bottom-top';

    /**
     * The event name that AOS will listen to (init after this event triggers)
     * @default 'DOMContentLoaded'
     */
    startEvent?: string;

    /**
     * Class name that will be added to the element when it is animated
     * @default 'aos-animate'
     */
    animatedClassName?: string;

    /**
     * Class name that will be added to the element when it is initialized
     * @default 'aos-init'
     */
    initClassName?: string;

    /**
     * If true, animation will leverage the data-aos-* attribute combinations
     * @default false
     */
    useClassNames?: boolean;

    /**
     * Whether AOS should observe mutations on the DOM
     * @default false
     */
    disableMutationObserver?: boolean;

    /**
     * Delay in ms for throttling scroll events
     * @default 99
     */
    throttleDelay?: number;

    /**
     * Delay in ms for debouncing resize events
     * @default 50
     */
    debounceDelay?: number;
  }

  /**
   * Element data structure used internally by AOS
   */
  interface AosElement {
    node: HTMLElement;
    position: {
      in: number;
      out?: number;
    };
    options: {
      once: boolean;
      mirror: boolean;
      animatedClassNames: string[];
      id?: string;
    };
  }

  /**
   * Initialize AOS with options
   * @param options AOS initialization options
   * @returns Array of elements initialized with AOS
   */
  function init(options?: AosOptions): AosElement[];

  /**
   * Refresh AOS - recalculate all offsets and positions of elements
   * @param initialize Whether it's first refresh or not
   */
  function refresh(initialize?: boolean): void;

  /**
   * Hard refresh - force reparsing of all elements
   */
  function refreshHard(): void;

  /**
   * Disable AOS - remove all animations and reset state
   */
  function disable(): void;

  /**
   * Check if AOS should be disabled based on provided setting
   * @param optionDisable Value of user's option disable
   */
  function isDisabled(optionDisable: AosOptions['disable']): boolean;

  /**
   * Handle scroll event to animate elements on scroll
   * @param elements Array of elements to handle
   */
  function handleScroll(elements: AosElement[], top?: number): void;

  /**
   * Throttle function to limit the number of function calls
   * @param func Function to throttle
   * @param wait Wait time in ms
   * @param options Additional throttle options
   */
  function throttle<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
    options?: {
      leading?: boolean;
      trailing?: boolean;
    }
  ): T;

  /**
   * Debounce function to limit the number of function calls
   * @param func Function to debounce
   * @param wait Wait time in ms
   * @param immediate Whether to call function immediately
   */
  function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
    immediate?: boolean
  ): T;
}

export default AOS;
