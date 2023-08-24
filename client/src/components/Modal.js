import React from "react";
import ListItemText from "@mui/material/ListItemText";
import Pagination from "@mui/material/Pagination";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import createStyles from "@mui/material/styles/createStyles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#d9bfa0",
  },
  item: {
    padding: "1.2",
  },
  avatar: { marginRight: 5 },
  paginator: {
    justifyContent: "center",
    padding: "10px",
  },
}));

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const classes = useStyles();

  const itemsPerPage = 3;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(hashtagList.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div id='modal-image'></div>
        <div id='modal-content'>
          <Typography variant='body1' id='modal-title'>
            Hashtags
          </Typography>
          <div>
            <List dense compoent='span' id='hashtag-flexbox'>
              {hashtagList
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((hashtagItem, index) => {
                  const labelId = `list-secondary-label-${index}`;
                  console.log(hashtagItem.hashtagID);
                  return (
                    <ListItem
                      key={hashtagItem.hashtagID}
                      button
                      onClick={() => console.log("")}
                    >
                      <ListItemText
                        id={labelId}
                        primary={hashtagItem.hashtagName}
                        className={classes.item}
                      />
                    </ListItem>
                  );
                })}
            </List>{" "}
            <Divider />
            <Box id='pagination-width' component='span'>
              <Pagination
                count={noOfPages}
                page={page}
                onChange={handleChange}
                defaultPage={1}
                color='primary'
                size='small'
                classes={{ ul: classes.paginator }}
              />
            </Box>
          </div>
          <button id='modal-close' type='button' onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
const hashtagList = [
  {
    hashtagID: 2,
    hashtagName: "#hastag1",
  },
  {
    hashtagID: 4,
    hashtagName: "#hastag2",
  },
  {
    hashtagID: 5,
    hashtagName: "#hastag3",
  },
  {
    hashtagID: 15,
    hashtagName: "#hastag4",
  },
  {
    hashtagID: 16,
    hashtagName: "#hastag5",
  },
  {
    hashtagID: 17,
    hashtagName: "#hastag6",
  },
  {
    hashtagID: 18,
    hashtagName: "#hastag7",
  },
  {
    hashtagID: 19,
    hashtagName: "#hastag8",
  },
  {
    hashtagID: 20,
    hashtagName: "#hastag8",
  },
  {
    hashtagID: 24,
    hashtagName: "#hastag9",
  },
  {
    hashtagID: 25,
    hashtagName: "#hastag10",
  },
  {
    hashtagID: 26,
    hashtagName: "#hastag11",
  },
  {
    hashtagID: 27,
    hashtagName: "#hastag12",
  },
  {
    hashtagID: 28,
    hashtagName: "#hastag13",
  },
  {
    hashtagID: 29,
    hashtagName: "#hastag14",
  },
  {
    hashtagID: 30,
    hashtagName: "#hastag15",
  },
  {
    hashtagID: 31,
    hashtagName: "#hastag16",
  },
  {
    hashtagID: 32,
    hashtagName: "#hastag17",
  },
  {
    hashtagID: 33,
    hashtagName: "#hastag18",
  },
  {
    hashtagID: 34,
    hashtagName: "#hastag19",
  },
  {
    hashtagID: 35,
    hashtagName: "#hastag20",
  },
];
