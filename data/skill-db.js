const skills = [
  {text: 'Wizardry', done: true, _id: 42},
  {text: 'Coding for 500 Hours straight', done: true, _id: 424242},
  {text: 'Buy milk', done: false, _id: 101010},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

// forgot to put this controller function in here
const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  // Add the id
  skill._id = Date.now() % 1000000
  // New skills wouldn't be done
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the skill object
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const Skill = skills.splice(idx, 1)
    if (!Skill.length ) throw new Error ('No skill was deleted')
    return callback(null, Skill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export {
  find,
  findById,
  create,
  findByIdAndDelete
}