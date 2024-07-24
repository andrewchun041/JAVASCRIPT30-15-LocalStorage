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

    populateList(items,itemsList);

    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

addItems.addEventListener('submit', addItem);