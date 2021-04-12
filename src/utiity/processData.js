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

exports.processEventData = (obj) => {
  const events = [];
  for (const elem in obj) {
    const event = {
      event_id: obj[elem].event_id,
      name: obj[elem].name,
      banner: obj[elem].banner,
      overview: obj[elem].overview,
      registration_link: obj[elem].registration_link,
      time: obj[elem].time,
    };
    events.push(event);
  }
  return events;
};
