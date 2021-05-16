import {Customer} from "../models/customer";

export const customers = (): Customer[] => {
  const value = [] as Customer[];
  const names = ['Tom & Co', 'Maxi Zoo Mechelen', 'Zoo Tom', 'Oscar Letf', 'Jerry Pet']
  for (let i = 0; i < 5; i++) {
    let data = {
      name: names[i],
      addressOne: 'De Koel',
      addressTwo: 'Overpelt',
      postalCode: '12330',
      tel: '+44267889',
      email: 'info@tomandco',
      openingHours: [
        {
        dayOfWeek: 'Ma',
        startTime: '2021-05-16T08:00:00.000Z'
        },
        {
          dayOfWeek: 'Di',
          startTime: '2021-05-16T08:00:00.000Z'
        },
        {
          dayOfWeek: 'Wo',
          startTime: '2021-05-16T08:00:00.000Z'
        },
        {
          dayOfWeek: 'Do',
          startTime: '2021-05-16T08:00:00.000Z'
        },
        {
          dayOfWeek: 'Vrij',
          startTime: '2021-05-16T08:00:00.000Z'
        },
        {
          dayOfWeek: 'Za',
          startTime: '2021-05-16T08:00:00.000Z'
        },
        {
          dayOfWeek: 'Zo',
          startTime: '2021-05-16T08:00:00.000Z'
        }
      ]
    }

    value.push(data as Customer);
  }
  return value;
}
