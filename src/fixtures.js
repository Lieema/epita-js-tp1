// add some meaningful data

const pictures = [];

const firstId = 155;
for (let index = 0; index < 5; index++) {
    pictures[index] = "https://picsum.photos/id/" + (firstId + index).toString() + "/354";    
}

export default pictures;
