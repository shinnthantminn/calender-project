// import { lists } from "../utils/constant";
// import { Box, Stack, Typography } from "@mui/material";
// import React from "react";

// const Descriptions = () => {
//     return (
//         <div style={{
//             display: 'felx',
//             flexDirection: 'row',
//             width: '100vw',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: '30px',
//         }} >
//             <div style={{
//                 width: '50vw',
//                 margin: 'auto',
//             }}>
//                 <Typography variant="h6" >Date : </Typography>
//             </div>
//             <div style={{
//                 height: '100%',
//                 backgroundColor: '#f1faee',
//                 borderRadius: '15px',
//                 width: '50vw',
//                 margin: 'auto', marginTop: '30px',
//             }}>
//                 {lists.map(({ shift, duration, icon, style }, index) => {
//                     return (
//                         <Stack key={index} sx={{
//                             display: 'felx',
//                             justifyContent: 'space-between',
//                         }}>
//                             <div style={{
//                                 display: 'flex',
//                                 justifyContent: 'space-between',
//                                 alignItems: 'center',
//                                 padding: '20px'
//                             }}>
//                                 <span style={{ width: '40%', fontWeight: '500' }}>{shift} </span>
//                                 <span style={{ width: '40%', fontWeight: '400' }}>{duration} </span>
//                                 <span style={{ color: style }}>{React.createElement(icon)}</span>
//                             </div>
//                         </Stack>
//                     );
//                 })}
//             </div>

//         </div>
//     )
// }

// export default Descriptions