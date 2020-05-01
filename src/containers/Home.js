import React, { useState, useEffect } from "react";
import "./Home.css";
import { useAppContext } from "../libs/context";
import { ListGroup, Modal, ListGroupItem } from "react-bootstrap";
import { onError } from "../libs/errorLib";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";

export default function Home() {
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(true);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function onLoad() {
            if (!isAuthenticated) {
                return;
            }

            try {
                const notes = await loadNotes();
                setNotes(notes);
            } catch (e) {
                onError(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, [isAuthenticated]);

    function loadNotes() {
        return API.get("notes", "/notes");
    }
    function renderNotesList(notes) {
        return [{}].concat(notes).map((note, i) =>
            i !== 0 ? (
                <Link key={note.noteId} to={`/notes/${note.noteId}`}>
                    <ListGroupItem header={note.content.trim().split("\n")[0]}>
                        {"Created: " + new Date(note.createdAt).toLocaleString()}
                    </ListGroupItem>
                </Link>
            ) : (
                    <Link key="new" to="/notes/new">
                        <ListGroupItem>
                            <h4>
                                <b>{"\uFF0B"}</b> Create a new note
                </h4>
                        </ListGroupItem>
                    </Link>
                )
        );
    }
    function renderLander() {
        return (
            <div className="lander">
                <h1>Keeper</h1>
                <p>More than a todo app</p>
            </div>
        );
    }
    function renderNotes() {
        return (
            <div className="notes">
                <Modal.Header>Your Notes</Modal.Header>
                <ListGroup>
                    {!isLoading && renderNotesList(notes)}
                </ListGroup>
            </div>
        );
    }
    return (
        <div className="Home">
            {isAuthenticated ? renderNotes() : renderLander()}
        </div>
    );
}