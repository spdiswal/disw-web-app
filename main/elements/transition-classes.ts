const transitionClasses = "transition-all ease-in-out motion-reduce:transition-none motion-reduce:hover:transition-none"
const slowestTransition = `${transitionClasses} duration-700`
const slowTransition = `${transitionClasses} duration-300`
const defaultTransition = `${transitionClasses} duration-200`
const fastTransition = `${transitionClasses} duration-75`

export const focusTransitionClasses = fastTransition
export const visibilityTransitionClasses = fastTransition
export const responsiveTextSizeTransitionClasses = defaultTransition
export const themeSwitchTransitionClasses = defaultTransition
export const expandableTransitionClasses = `${transitionClasses} duration-700 sm:duration-500 md:duration-700 lg:duration-500`
export const linkTransitionClasses = slowTransition
export const imageTransitionClasses = slowestTransition
