export interface PersonInfoProps {
  id: number,
  name: string,
  dateOfBirth: Date,
  gender: string,
  height: number,
  weight: number,
  Medication: [
    {
      id: number,
      name: string,
      dosage: number,
      frequency: number,
      notes: string | null,
      firstSchedule: Date,
      personId: number,
      medicationTypeId: number,
      medicationType: {
        id: number,
        type: string,
        hasPlural: boolean
      }
    }
  ]
}