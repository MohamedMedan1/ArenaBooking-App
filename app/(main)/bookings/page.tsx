import BookingCard from "@/app/_components/BookingCard";
import Container from "@/app/_components/Container";
import PageHeader from "@/app/_components/PageHeader";

const bookings =[
        {
            "_id": "69fb009403f17b90c7e2186f",
            "field": {
                "_id": "69e9518e2ca1913702b124ef",
                "image": "https://res.cloudinary.com/dzycme8a9/image/upload/v1776898446/arenaBooking/fields/ihp2fjvfegrtzmnly3vk.jpg",
                "name": "LegendArea",
                "category": {
                    "_id": "69d7c6bea912a676ab19c815",
                    "name": "Football"
                }
            },
            "client": {
                "_id": "69faff6d03f17b90c7e21319",
                "name": "samy",
                "email": "samy12@gnail.com",
                "type": "Client",
                "phone": "00000000000"
            },
            "bookingDate": "2026-04-29T00:00:00.000Z",
            "startTime": "04:00",
            "endTime": "06:00",
            "duration": 2,
            "totalPrice": 770,
            "deposit": 210,
            "isPaid": true,
            "status": "completed",
            "paymobOrderId": "520056919",
            "createdAt": "2026-05-06T08:49:24.565Z",
            "updatedAt": "2026-05-07T02:17:12.916Z",
            "remaining": 560,
            "bookingNumber": "BK-426365",
            "__v": 0
        },
        {
            "_id": "69f7705303f17b90c7e1fd04",
            "field": {
                "_id": "69e951da2ca1913702b125a7",
                "image": "https://res.cloudinary.com/dzycme8a9/image/upload/v1776898522/arenaBooking/fields/lnsfvxgyhft3fozsd4im.jpg",
                "name": "MaradonaArea",
                "category": {
                    "_id": "69d7c6bea912a676ab19c815",
                    "name": "Football"
                }
            },
            "client": {
                "_id": "69f74eb303f17b90c7e1f52f",
                "name": "Esraa Mohamed",
                "email": "em1489377@gmail.com",
                "type": "Client",
                "phone": "01551049669"
            },
            "bookingDate": "2026-04-23T00:00:00.000Z",
            "startTime": "04:00",
            "endTime": "06:00",
            "duration": 2,
            "totalPrice": 704,
            "deposit": 192,
            "isPaid": false,
            "status": "confirmed",
            "paymobOrderId": "518281018",
            "createdAt": "2026-05-03T15:57:07.873Z",
            "updatedAt": "2026-05-03T15:57:07.873Z",
            "remaining": 512,
            "bookingNumber": "BK-572851",
            "__v": 0
        },
        {
            "_id": "69f751b603f17b90c7e1f642",
            "field": {
                "_id": "69f61b9e03f17b90c7e1ef1d",
                "image": "https://res.cloudinary.com/dzycme8a9/image/upload/v1777736606/arenaBooking/fields/dsybqfzagdumhuaaqdd9.jpg",
                "name": "AndyArena",
                "category": {
                    "_id": "69d7c7b0a912a676ab19c816",
                    "name": "Basketball"
                }
            },
            "client": {
                "_id": "69f74eb303f17b90c7e1f52f",
                "name": "Esraa Mohamed",
                "email": "em1489377@gmail.com",
                "type": "Client",
                "phone": "01551049669"
            },
            "bookingDate": "2026-05-06T00:00:00.000Z",
            "startTime": "04:00",
            "endTime": "06:00",
            "duration": 2,
            "totalPrice": 660,
            "deposit": 180,
            "isPaid": true,
            "status": "completed",
            "paymobOrderId": "518183166",
            "createdAt": "2026-05-03T13:46:30.938Z",
            "updatedAt": "2026-05-06T08:48:47.930Z",
            "remaining": 480,
            "bookingNumber": "BK-312841",
            "__v": 0
        },
    ]

export default async function Page() {
  // const bookings = await getBookings();
  return (
    <div className="min-h-lvh mt-21 bg-gray-100">
      <PageHeader title="My Bookings"/>
      <Container>
        <div className="space-y-7 pt-10 pb-20">
          {bookings.map(cur => <BookingCard key={cur._id} booking={cur}/>)}
        </div>
      </Container>
    </div>
  );
}
