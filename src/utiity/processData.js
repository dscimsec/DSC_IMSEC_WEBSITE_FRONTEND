const processData = (obj) => {
  const users = [];
    for (const user in obj) {
    //   console.log(obj[user])
    let mem = {
      name: obj[user].name,
      designation: obj[user].designation,
      profiles: obj[user].profiles,
      profile_pic: obj[user].profile_pic,
      about: obj[user].about,
      email: obj[user].email,
    };
        // console.log(mem);
    users.push(mem);
  }
  return users;
};


export default processData