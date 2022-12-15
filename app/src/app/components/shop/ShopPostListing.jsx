import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import ActionsRow from './ActionsRow';
const ShopPostListing = ({shopPosts, fetchShopData, shopID}) => {
    const [columns, setColumns] = useState([
        { field: '_id', headerName: 'ID', width: 100 },
        { 
            field: 'title', headerName: 'Titre', width: 130,
        },
        { 
            field: 'description', headerName: 'Description', width: 300,
        },
        {
            field:  'weight', headerName: 'Poids', width: 100,
            valueGetter: (params) => `${params.value} kg`,
        },
        {
            field:  'size', headerName: 'Taille', width: 100,
            valueGetter: (params) => `${params.value} cm`,
        },
        {
            field:  'style', headerName: 'Style', width: 130,
        },
        {
            field:  'price', headerName: 'Prix', width: 100,
            valueGetter: (params) => `${params.value} €`,
        },
        {
            field:  'isAvailable', headerName: 'Disponible ?', width: 100,
            valueGetter: (params) => `${params.value == true ? 'Oui' : 'Non'}`
        },
        {
            field:  'bookings', headerName: 'Nb Réservations', width: 120,
            valueGetter: (params) => `${params.value.length}`
        },
        { 
            field: '', headerName: 'Actions', width: 300,
            renderCell: (params) => <ActionsRow params={params} fetchShopData={fetchShopData} shopID={shopID}/>
         },
        
    ]);
    return ( 
        <Box
            sx={{
                height: 400, 
                width: '90%',
                margin: '120px auto 0'
            }}
        >
            <Button href='/post/create' variant='contained' sx={{mb: 2}}>Nouvelle location</Button>
            <DataGrid
            rows={shopPosts}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row._id}
            />

        </Box>
     );
}
 
export default ShopPostListing;