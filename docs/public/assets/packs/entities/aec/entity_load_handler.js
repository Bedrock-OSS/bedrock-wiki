import {world, EntityLoadAfterEvent, Entity} from '@minecraft/server';

/**@type {Record<string, Set<(entity: Entity) => void>>} */
const Load_Callbacks = {};

/**@param {EntityLoadAfterEvent} arg */
function loadEntity(arg) {
	const Callbacks = Load_Callbacks[arg.entity.typeId];
	if (Callbacks != undefined) Callbacks.forEach(function iterate(callback) {
		Callbacks.delete(callback);
		callback(arg.entity);
	});
}

/**
 * Registers a function to be called when an entity loads.
 * @param {string} id The identifier of the entity to register a callback for.
 * @param {(entity: Entity) => void} cb A callback function to execute when this
 * entity loads in.
 */
export function registerOnEntityLoad(id, cb) {
	let Entity_Set = Load_Callbacks[id];
	if (Entity_Set == undefined) {
		Entity_Set = new Set();
		Load_Callbacks[id] = Entity_Set;
	}
	Entity_Set.add(cb);
}

world.afterEvents.entityLoad.subscribe(loadEntity);