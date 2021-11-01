export const fetchProfiles = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/profiles',
  });
};

// fetchProfiles url also able to get the POJO from /api/users/:id

export const fetchProfile = (profileId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/profiles/${profileId}`,
  });
};

export const createProfile = (profile) => {
  return $.ajax({
    method: 'POST',
    url: '/api/profiles',
    data: { profile },
  });
};

export const updateProfile = (profile) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/profiles/${profile.id}`,
  });
};

export const deleteProfile = (profileId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/profiles/${profileId}`,
  });
};
