import {Lessor} from '../../model/lessor';

const createLessor = async (req, res) => {
    try {
        const newLessor = new Lessor({...req.body});
        return await Lessor.Save(newLessor);
    } catch (e) {
        console.log(e);
    }
}

const readLessor = async(req, res) => {

}

const updateLessor = async (req, res) => {

}

const deleteLessor = async (req, res) => {

}

export {
    createLessor,
    readLessor,
    updateLessor,
    deleteLessor,
};