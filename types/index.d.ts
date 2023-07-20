export interface MedicationProps {
  id: number,
  name: string,
  dosage: string,
  frequency: string,
  notes: string | null | object,
  personId: number,
  medicationTypeId: number
}