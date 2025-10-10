import type { Psychologist } from "@/types/psychologist";

/**
 * Formats a psychologist's name by prepending their title if available.
 * If the psychologist object has a `title` property, it uses that title;
 * otherwise, it defaults to "Dr.".
 *
 * @param psychologist - The psychologist object containing at least a `name` property and optionally a `title`.
 * @returns The formatted psychologist name as a string.
 */
export const formatPsychologistName = (psychologist: Psychologist) => {
  const { title, name } = psychologist;
  if (title) return `${title} ${name}`;
  return `Dr. ${name}`;
};
