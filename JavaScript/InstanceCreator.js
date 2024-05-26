// It should create html instances for the main page
// Should work like -->  Creates html div that represents infos about that page it will direct to

// InstanceCreator.js

/**
 * Creates a new div element with the specified tree-like content and appends it to the target parent element.
 * 
 * @param {Object[]} tree An array of objects representing the tree structure. Each object should have a `content` property for the text content and optionally a `children` property which is an array of similar objects for nested content.
 * @param {HTMLElement} parentElement The parent element where the new div will be appended.
 */
function createDivWithTreeContent(tree, parentElement) {

    const newDiv = document.createElement('div');

    // Function to recursively add children to the current div
    function addChildren(node) {
        if (!node.children ||!Array.isArray(node.children)) return;

        node.children.forEach(child => {
            const childDiv = document.createElement('div');
            childDiv.textContent = child.content;
            newDiv.appendChild(childDiv);

            // Recursively add children of the current child
            addChildren(child);
        });
    }

    // Add the root content to the new div
    newDiv.textContent = tree[0].content;

    // Add all children recursively
    addChildren(tree[0]);

    // Append the new div to the specified parent element
    parentElement.appendChild(newDiv);
}

export default createDivWithTreeContent;