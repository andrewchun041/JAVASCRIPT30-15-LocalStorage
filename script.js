const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    // stop page from reload
    e.preventDefault();

    // select input with name=item and get it's value
    const text = this.querySelector('[name=item]').value;
    // create a new object with the value
    const item = {
        // text: 'text',
        text,
        done: false
    }
    // push/add the new object to the items list
    items.push(item);

    this.reset();
}

addItems.addEventListener('submit', addItem);