exports.processUserData = (obj) => {
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

exports.processTechData = (obj) => {
  const techs = [];
  for (const tech in obj) {
    let data = {
      name: obj[tech].name,
      about: obj[tech].about,
      codelabs_link: obj[tech].codelabs_link,
      tech_code: obj[tech].codelabs_link,
      avatar: obj[tech].avatar,
    };
    techs.push(data);
  }
  return techs;
};
