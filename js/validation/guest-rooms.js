import { form } from './form.js';

const FOR_NOT_GUESTS_ROOMS = 100;
const FOR_NOT_GUESTS_CAPACITY = 0;

const roomSelect = form.querySelector('#room_number');
const capacitySelect = form.querySelector('#capacity');


const calcCapacityCondition = () => Number(roomSelect.value) - Number(capacitySelect.value);

const isSpecialOfferRoom = () => calcCapacityCondition() === FOR_NOT_GUESTS_ROOMS;

const isCapacityCondition = () => {
  const FIT_ROOMS_FOR_GUEST = 0;

  const isFitRooms = calcCapacityCondition() >= FIT_ROOMS_FOR_GUEST;
  const isEnoughRoomsForGuests = Number(roomSelect.value) !== FOR_NOT_GUESTS_ROOMS;
  const isSpecialOfferCapacity = Number(capacitySelect.value) !== FOR_NOT_GUESTS_CAPACITY;

  return (isFitRooms && isEnoughRoomsForGuests && isSpecialOfferCapacity);
};

const validateRoom = () => isCapacityCondition() || isSpecialOfferRoom();

export { validateRoom, roomSelect };
