import { world, EntityLoadAfterEvent, Entity } from "@minecraft/server";

/** @type {Record<string, Set<(entity: Entity) => void>>} */
const loadCallbacks = {};

/** @param {EntityLoadAfterEvent} event */
function loadEntity(event) {
  const { entity } = event;
  const callbacks = loadCallbacks[entity.typeId];

  if (callbacks === undefined) return;

  for (const callback of callbacks) {
    callbacks.delete(callback);
    callback(entity);
  }
}

/**
 * Registers a function to be called when an entity loads.
 * @param {string} id The identifier of the entity to register a callback for.
 * @param {(entity: Entity) => void} callback A callback function to execute when this entity loads in.
 */
export function registerOnEntityLoad(id, callback) {
  loadCallbacks[id] ??= new Set();
  loadCallbacks[id].add(callback);
}

world.afterEvents.entityLoad.subscribe(loadEntity);
