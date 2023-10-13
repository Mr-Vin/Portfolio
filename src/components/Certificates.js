import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import { DataGrid } from '@mui/x-data-grid';



const Header = () => {
    return (
        <Card sx={{
            width: "1500px",
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginBottom: "100px",
            }}>
            <div style={{
                backgroundImage: `url('/images/certificates-wallpaper.jpg')`,
                height: "500px",
                display: 'flex',
                backgroundSize: "cover",
                backgroundPosition: "center",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
            }}>
                <div style={{
                    display: "flex",
                    alignContent: "left",
                    justifyContent: "left",
                    alignItems: "left",
                    width: "100%",
                }}>
                    <div style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "left",
                        alignItems: "left",
                        alignContent: "left",
                        height: '400px',
                        width: '100%',
                        borderRadius: "25px",
                        marginTop: "50px",
                    }}>

                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: "left", 
                            alignItems: "left",
                            padding: '37px',

                        }}>
                            <h1 style={{
                                color: "rgba(255, 255, 255, 1)",
                                fontFamily: "Roboto, sans-serif",
                                justifyContent: "left",
                                alignItems: "left",
                                fontSize: '64px',
                                width: "360px",
                            }}>
                                Certificates
                            </h1>
                            <div style={{
                                color: "rgba(255, 255, 255, 1)",
                                fontFamily: "Roboto, sans-serif",
                                justifyContent: "left",
                                alignItems: "left",
                                alignContent: "left",
                                textAlign: "left",
                                fontSize: "24px"
                            }}>
                                Certificates are fun. It helps to keep you stay motivated, and also track of what is it that needed to be learned more.
                            </div>
                            <div style={{
                                color: "rgba(255, 255, 255, 1)",
                                fontFamily: "Roboto, sans-serif",
                                justifyContent: "left",
                                alignItems: "left",
                                alignContent: "left",
                                textAlign: "left",
                                fontSize: "16px",
                                marginTop: "30px",
                            }}>
                                "The only way to learn a new programming language is by writing programs in it." &emsp; - Dennis Ritchie
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Date Received',
      headerName: 'Date Received',
      type: 'date',
      width: 150,
    },
    {
      field: 'Certification',
      headerName: 'Certification',
      width: 300,
      cellClassName: "certification-cell",
    },
    {
      field: 'Organization',
      headerName: 'Organization',
      width: 200,
    },
    {
      field: 'Category',
      headerName: 'Category',
      width: 160,
    },
    {
      field: 'Award',
      headerName: 'Award',
      width: 250,
    },
  ];

const CerticatesCollected = [{
    "id": 1,
    "Date Received": "4/23/2023",
    "Certification": "Bank of South Carolina Corp.",
    "Organization": "Jaskolski, Paucek and Hoeger",
    "Category": "Fuscia",
    "Award": "Lobortis.mp3"
  }, {
    "id": 2,
    "Date Received": "1/18/2023",
    "Certification": "Cooper-Standard Holdings Inc.",
    "Organization": "Schulist, Swift and Frami",
    "Category": "Turquoise",
    "Award": "InFelis.ppt"
  }, {
    "id": 3,
    "Date Received": "12/4/2022",
    "Certification": "Deltic Timber Corporation",
    "Organization": "Marvin and Sons",
    "Category": "Red",
    "Award": "Mauris.ppt"
  }, {
    "id": 4,
    "Date Received": "8/24/2022",
    "Certification": "CDK Global, Inc.",
    "Organization": "Parisian LLC",
    "Category": "Violet",
    "Award": "NullaUt.avi"
  }, {
    "id": 5,
    "Date Received": "4/29/2022",
    "Certification": "Blueknight Energy Partners L.P., L.L.C.",
    "Organization": "Gerhold Group",
    "Category": "Blue",
    "Award": "Quam.xls"
  }, {
    "id": 6,
    "Date Received": "3/23/2023",
    "Certification": "Lonestar Resources US Inc.",
    "Organization": "Berge-Herzog",
    "Category": "Red",
    "Award": "Turpis.mp3"
  }, {
    "id": 7,
    "Date Received": "12/2/2022",
    "Certification": "RPM International Inc.",
    "Organization": "Rath, Fay and Waters",
    "Category": "Aquamarine",
    "Award": "Eget.mp3"
  }, {
    "id": 8,
    "Date Received": "3/1/2022",
    "Certification": "Frankly, Inc.",
    "Organization": "Streich-Kessler",
    "Category": "Red",
    "Award": "NisiNam.tiff"
  }, {
    "id": 9,
    "Date Received": "1/5/2024",
    "Certification": "Central Europe, Russia and Turkey Fund, Inc. (The)",
    "Organization": "Kris-Schumm",
    "Category": "Yellow",
    "Award": "SuspendissePotenti.mp3"
  }, {
    "id": 10,
    "Date Received": "4/13/2022",
    "Certification": "Liberty Interactive Corporation",
    "Organization": "Rosenbaum-Hessel",
    "Category": "Fuscia",
    "Award": "Morbi.avi"
  }, {
    "id": 11,
    "Date Received": "7/25/2024",
    "Certification": "Hannon Armstrong Sustainable Infrastructure Capital, Inc.",
    "Organization": "Green and Sons",
    "Category": "Green",
    "Award": "EgetMassa.ppt"
  }, {
    "id": 12,
    "Date Received": "9/24/2022",
    "Certification": "InVivo Therapeutics Holdings Corp.",
    "Organization": "Feil LLC",
    "Category": "Green",
    "Award": "Tortor.pdf"
  }, {
    "id": 13,
    "Date Received": "6/7/2023",
    "Certification": "Legg Mason, Inc.",
    "Organization": "Rosenbaum, Jerde and Rohan",
    "Category": "Goldenrod",
    "Award": "LaoreetUt.png"
  }, {
    "id": 14,
    "Date Received": "10/3/2023",
    "Certification": "Catabasis Pharmaceuticals, Inc.",
    "Organization": "Schaden-Metz",
    "Category": "Maroon",
    "Award": "MaurisNon.avi"
  }, {
    "id": 15,
    "Date Received": "2/15/2024",
    "Certification": "Teladoc, Inc.",
    "Organization": "Wiza LLC",
    "Category": "Teal",
    "Award": "Nec.mov"
  }]


const CertificatesBox = () => {
    const [search, setSearch] = useState("")

    return (
        <div style={{width: "100%", height: "800px" }}>
            <Container sx={{width: "100%", height: "800px"}}>
                <FormControl sx={{width: "100%" }}>
                    <TextField id="outlined-search" label="Search Certificates" type="search" color="error" variant="outlined" fullWidth onChange={(e) => setSearch(e.target.value)}/>
                </FormControl>
                <Box sx={{ height: "645px", width: "100%", marginTop: "25px"}}>
                    <DataGrid 
                        rows={CerticatesCollected.filter((
                            (row) => row.Certification.toLowerCase().includes(search.toLowerCase()) || row.Organization.toLowerCase().includes(search.toLowerCase()) || row.Category.toLowerCase().includes(search.toLowerCase()) || row.Award.toLowerCase().includes(search.toLowerCase())
                        ))}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        />
                </Box>
            </Container>
        </div>
    )
}




function Certificates() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            paddingTop: '30px',
            width: "1850px",
            margin: "auto",
        }}> 
            <Header />
            <CertificatesBox />
        </div>
    )
};

export default Certificates;