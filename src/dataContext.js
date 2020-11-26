import { v4 as uuidv4 } from "uuid";
import React,{useState, createContext} from 'react';

export const ActivityContext = createContext();
export const AlertContext = createContext();
export const MagazineContext = createContext();

export const ActivityProvider = props => {
    const [activities, setActivities] = useState([
        {
            name: "Postural Training",
            cover:
                "https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            duration: 30,
            hours: [{start: "8:30", finish: "9:00"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["Sei già iscritto", "iscritto"],
            id: uuidv4(),
            category: "Cardiovascolari e Tonificazione",
            color: "#c94043",
            active: true,
        },
        {
            name: "Hatha Yoga",
            cover:
                "https://images.pexels.com/photos/3823186/pexels-photo-3823186.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            duration: 45,
            hours: [{start: "9:00", finish: "9:45"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["Sei già iscritto", "iscritto"],
            id: uuidv4(),
            category: "Cardiovascolari e Tonificazione",
            color: "#c94043",
            active: true,
        },
        {
            name: "Panca Fit",
            cover:
                "https://images.pexels.com/photos/1638336/pexels-photo-1638336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            duration: 45,
            hours: [{start: "8:30", finish: "9:15"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["18/30 Posti disponibili", "iscriviti"],
            id: uuidv4(),
            category: "Danza",
            color: "#ab417f",
            active: true,
        },
        {
            name: "Body Pump",
            cover:
                "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            duration: 50,
            hours: [{start: "8:30", finish: "9:20"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["18/30 Posti disponibili", "iscriviti"],
            id: uuidv4(),
            category: "Pumping",
            color: "#205950",
            active: true,
        },
        {
            name: "Hatha Yoga",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            duration: 45,
            hours: [{start: "9:00", finish: "9:45"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["attività libera", ""],
            id: uuidv4(),
            category: "Cardiovascolari e Tonificazione",
            color: "#c94043",
            active: true,
        },
        {
            name: "LESS MILLS GRIT",
            cover:
                "https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            duration: 45,
            hours: [{start: "9:00", finish: "9:45"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["03 persone in attesa", "mettiti in attesa"],
            id: uuidv4(),
            category: "Cardiovascolari e Tonificazione",
            color: "#f8cfb6",
            active: true,
        },
        {
            name: "Play Acqua",
            cover:
                "https://images.pexels.com/photos/2091400/pexels-photo-2091400.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            duration: 50,
            hours: [{start: "8:30", finish: "9:20"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["12 ore all'apertura", "none"],
            id: uuidv4(),
            category: "Attività in acqua",
            color: "#2ab3bf",
            active: true,
        },
        {
            name: "Hatha Yoga",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            duration: 45,
            hours: [{start: "9:00", finish: "9:45"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["Sei in lista di attesa 2 persone prima di te", "iscritto"],
            id: uuidv4(),
            category: "Cardiovascolari e Tonificazione",
            color: "#c94043",
            active: true,
        },
        {
            name: "Hatha Yoga",
            cover:
                "https://images.pexels.com/photos/3823186/pexels-photo-3823186.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            duration: 45,
            hours: [{start: "9:00", finish: "9:45"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["Sei già iscritto", "iscritto"],
            id: uuidv4(),
            category: "Cardiovascolari e Tonificazione",
            color: "#c94043",
            active: true,
        },
        {
            name: "Panca Fit",
            cover:
                "https://images.pexels.com/photos/1638336/pexels-photo-1638336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            duration: 45,
            hours: [{start: "8:30", finish: "9:15"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["18/30 Posti disponibili", "iscriviti"],
            id: uuidv4(),
            category: "Danza",
            color: "#ab417f",
            active: true,
        },
        {
            name: "Body Pump",
            cover:
                "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            duration: 50,
            hours: [{start: "8:30", finish: "9:20"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["02/30 Posti disponibili", "iscriviti"],
            id: uuidv4(),
            category: "Pumping",
            color: "#205950",
            active: true,
        },
        {
            name: "Hatha Yoga",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            duration: 45,
            hours: [{start: "9:00", finish: "9:45"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["attività libera", ""],
            id: uuidv4(),
            category: "Cardiovascolari e Tonificazione",
            color: "#c94043",
            active: true,
        },
        {
            name: "Play Acqua",
            cover:
                "https://images.pexels.com/photos/2091400/pexels-photo-2091400.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            duration: 50,
            hours: [{start: "8:30", finish: "9:20"}],
            room: "Conscious",
            place: "Club Ravizza",
            status: ["12 ore all'apertura", "none"],
            id: uuidv4(),
            category: "Attività in acqua",
            color: "#2ab3bf",
            active: true,
        },
        //ADD MORE HERE
    ]);
    
    return (
        <ActivityContext.Provider value={[activities, setActivities]}>
            {props.children}
        </ActivityContext.Provider>
    );
}

export const AlertProvider = props => {
    const [alerts, setAlerts] = useState([
        {
            title: "Chiusure straordinarie per vacanze di Natale",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString(),
            read: false
        },
        {
            title: "Chiusure straordinarie per vacanze di Natale",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString(),
            read: true
        },
    ]);

    return (
        <AlertContext.Provider value={[alerts, setAlerts]}>
            {props.children}
        </AlertContext.Provider>
    );
}

export const MagazineProvider = props => {
    const [magazines, setMagzines] = useState([
        {
            image: "https://images.pexels.com/photos/66990/pexels-photo-66990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title: "Gli Eventi  di Dicembre e Gennaio",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString()
        },
        {
            image: "https://images.pexels.com/photos/66990/pexels-photo-66990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title: "Gli Eventi  di Dicembre e Gennaio",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString()
        },
        {
            image: "https://images.pexels.com/photos/66990/pexels-photo-66990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title: "Gli Eventi  di Dicembre e Gennaio",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString()
        },
        {
            image: "https://images.pexels.com/photos/66990/pexels-photo-66990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title: "Gli Eventi  di Dicembre e Gennaio",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString()
        },
        {
            image: "https://images.pexels.com/photos/66990/pexels-photo-66990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title: "Gli Eventi  di Dicembre e Gennaio",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString()
        },
        {
            image: "https://images.pexels.com/photos/66990/pexels-photo-66990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title: "Gli Eventi di Dicembre e Gennaio",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString()
        },
        {
            image: "https://images.pexels.com/photos/66990/pexels-photo-66990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            title: "Gli Eventi di Dicembre e Gennaio",
            description: "Fusce neque. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Phasellus accumsan cursus velit. Ut non enim eleifend felis pretium feugiat. Vestibulum fringilla pede sit amet augue. Cras ultricies mi eu turpis hendrerit fringilla. In consectetuer turpis ut velit. Fusce a quam. Vivamus quis mi.",
            date: new Date().toLocaleDateString()
        },
    ]);

    return (
        <MagazineContext.Provider value={[magazines, setMagzines]}>
            {props.children}
        </MagazineContext.Provider>
    );
}

