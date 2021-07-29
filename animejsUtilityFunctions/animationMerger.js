console.clear();

/**
 * merge all animation to timeline
 * @param {object} timeline - anime timeline object
 * @param {array} objects array of animation object
 * @returns {timeline}
 */
function animationMerger(timeline, [...objects]) {
    while (objects.length) {
        const properties = objects.shift();
        const { offset } = properties;

        timeline.add(properties, offset);
    }

    return timeline;
}