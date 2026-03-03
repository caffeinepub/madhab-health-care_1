import Time "mo:core/Time";
import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Booking = {
    name : Text;
    phone : Text;
    email : ?Text;
    service : Text;
    preferredDate : Text;
    message : ?Text;
    submittedAt : Time.Time;
  };

  let bookings = Map.empty<Text, Booking>();

  public shared ({ caller }) func submitBooking(name : Text, phone : Text, email : ?Text, service : Text, preferredDate : Text, message : ?Text) : async () {
    let booking : Booking = {
      name;
      phone;
      email;
      service;
      preferredDate;
      message;
      submittedAt = Time.now();
    };
    bookings.add(name.concat(phone), booking);
  };

  public shared ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray();
  };

  public query ({ caller }) func getBookingById(id : Text) : async Booking {
    switch (bookings.get(id)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) { booking };
    };
  };

  public shared ({ caller }) func deleteBooking(id : Text) : async () {
    bookings.remove(id);
  };

  public shared ({ caller }) func updateBooking(id : Text, name : Text, phone : Text, email : ?Text, service : Text, preferredDate : Text, message : ?Text) : async () {
    let updatedBooking : Booking = {
      name;
      phone;
      email;
      service;
      preferredDate;
      message;
      submittedAt = Time.now();
    };
    bookings.add(id, updatedBooking);
  };
};
