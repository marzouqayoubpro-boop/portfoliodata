/**
 * Combine conditionally des classes CSS (mini clsx).
 * Usage : cn("base", condition && "active", "always")
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
