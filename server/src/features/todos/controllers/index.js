/**
 * Ceci est un "barrel-file".
 * Il importe tous les fichiers du dossiers et les re-exporte
 * Afin d'importer un seul fichier la où on a besoin des ces fonctions
 */
export { getAll } from "./getAll.js";
export { getOne } from "./getOne.js";
export { insert } from "./insert.js";
export { remove } from "./remove.js";
export { replace } from "./replace.js";
export { update } from "./update.js";
