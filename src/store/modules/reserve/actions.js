export function addReserveRequest(id) {
  return {
    type: "ADD_RESERVE_REQUEST",
    id
  };
}

export function addReserveSuccess(trip) {
  return {
    type: "ADD_RESERVE_SUCCESS",
    trip
  };
}

// export function addReserve(trip) {
//   return {
//     type: "ADD_RESERVE",
//     trip
//   };
// }

export function removeReserve(id) {
  return {
    type: "REMOVE_RESERVE",
    id
  };
}

// ouvida pelo sagas
export function updateAmountRequest(id, amount) {
  return {
    type: "UPDATE_RESERVE_REQUEST",
    id,
    amount
  };
}

// ouvida pelo reducer
export function updateAmountSuccess(id, amount) {
  return {
    type: "UPDATE_RESERVE_SUCCESS",
    id,
    amount
  };
}
