interface PersianDate extends Date {
    format(settings?: string): string;
}
interface String {
    toPersianDigit(): string;
}
declare var persianDate: (initialValue?:any) => PersianDate;
