import axios from 'axios';

const getList = async ({ date, MemberId }) => {
  try {
    const res = await axios.get('https://api.ppagppag.kro.kr/api/todolist', {
      params: { date },
      headers: { 'Member-Id': MemberId },
    });

    return res.data.data.todoLists;
  } catch (err) {
    throw err;
  }
};

export default getList;
