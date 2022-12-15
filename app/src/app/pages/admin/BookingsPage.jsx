import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import shopService from "../../../setup/services/shop.service";

const BookingsPage = ({shopID}) => {
    const [bookings, setBookings] = useState(null)
    const [columns, setColumns] = useState([
        { 
            field: '_id', headerName: 'ID', width: 300,
        },
        {
            field: 'createdAt', headerName: 'Date de réservation', width: 300,
            valueGetter: (params) => `${new Date(params.value).toLocaleDateString()}`
        },
        {
            field: 'post', headerName: 'Location', width: 300,
            renderCell: (params) => <Button href={`/post/${params.value}`}>Location</Button>
        },
        {
            field: 'telephoneNumber', headerName: 'Utilisateur', width: 300,
            renderCell: (params) => <Button href={`tel:${params.value}`}>{params.value}</Button>
        }
    ])

    const fetchBookings = async (id) => {
        try {
            const bookingResponse = await shopService.getBookings(id)
            setBookings(bookingResponse)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBookings(shopID)
    },[])
    return ( 
        <div>
            {bookings &&
            <>
                <h1>Réservations</h1>
                <Button href={`/shop/${shopID}`} variant='contained' sx={{mb: 2}}>Retour</Button>
                <Box
                    sx={{
                        height: 400, 
                        width: '90%',
                        margin: '120px auto 0'
                    }}
                >
                    <DataGrid
                        rows={bookings}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        getRowId={(row) => row._id}
                    />
                </Box>
            </>
            }
        </div>
     );
}
 
export default BookingsPage;