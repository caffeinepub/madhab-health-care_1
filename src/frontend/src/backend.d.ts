import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    service: string;
    name: string;
    submittedAt: Time;
    email?: string;
    message?: string;
    preferredDate: string;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    deleteBooking(id: string): Promise<void>;
    getAllBookings(): Promise<Array<Booking>>;
    getBookingById(id: string): Promise<Booking>;
    submitBooking(name: string, phone: string, email: string | null, service: string, preferredDate: string, message: string | null): Promise<void>;
    updateBooking(id: string, name: string, phone: string, email: string | null, service: string, preferredDate: string, message: string | null): Promise<void>;
}
