import React from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const Post = (props) => {
    return (
        <Card className="mahasiswa">
            <Card.Img variant="top" src="http://placeimg.com/120/120/any" />
            <Card.Body>
                <Card.Title>{props.nama}</Card.Title>
            </Card.Body>
            <ListGroup >
                <ListGroupItem>NIM      : {props.nim}</ListGroupItem>
                <ListGroupItem>ALAMAT   : {props.alamat}</ListGroupItem>
                <ListGroupItem>HP       : {props.hp}</ListGroupItem>
                <ListGroupItem>ANGKATAN : {props.angkatan}</ListGroupItem>
                <ListGroupItem>STATUS   : {props.status}</ListGroupItem>

            </ListGroup>
            <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
        </Card>
    )
}

export default Post;