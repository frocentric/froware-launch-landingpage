export const buildParams = (type, { id = '', ...data }) => {
  const host = process.env.REACT_APP_FROWARE_SERVICE_HOST;
  const campaignId = process.env.REACT_APP_FROWARE_LANDING_PAGE_ID;
  const path = 'api/v1/campaigns/froware/landing-page';
  const url = type === 'create' ? `${host}/${path}/${campaignId}` : `${host}/${path}/${campaignId}/${id}`;
  const params = {
    method: type === 'create' ? 'POST' : 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  console.log({ url, params });
  return { url, params };
};

const request = async (url, params) => {
  const res = await fetch(url, params);
  const json = await res.json();
  return json;
};

export const storeMemberId = (store = localStorage, id, data) => {
  return new Promise((res, rej) => {
    try {
      store.setItem(id, JSON.stringify(data));
      res();
    }
    catch (error) {
      console.log('localStorage:error => ', error);
      rej(error);
    }
  });
};

export const getMemberId = (store = localStorage) => {
  return new Promise((res, rej) => {
    try {
      const memberId = store.getItem('id');
      res(JSON.parse(memberId));
    }
    catch (error) {
      console.log('localStorage:error => ', error);
      rej(error);
    }
  });
};

export const createNewMember = async (data) => {
  const { url, params } = buildParams('create', data);
  try {
    const { id } = await request(url, params);
    await storeMemberId(localStorage, 'id', id);
  }
  catch (error) {
    console.log('createNewMember:error => ', error);
  }
};

export const updateMember = async (data) => {
  const id = await getMemberId(localStorage, 'id');
  const { url, params } = buildParams('update', { ...data, id });
  try {
    await request(url, params);
  }
  catch (error) {
    console.log('updateMember:error => ', error);
  }
};




