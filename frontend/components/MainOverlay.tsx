import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { LocationAvatar } from './LocationAvatar'
import { TripCard } from './TripCard'
import { Button } from './Button'
import { useActions, useValues } from 'kea'
import { tripLogic } from '../logics/tripLogic'
import { useEffect } from 'react'
import { useRef } from 'react'

export function MainOverlay(): JSX.Element {
    const { toggleTripView, clearSavedtrip } = useActions(tripLogic)
    const { savedTrip } = useValues(tripLogic)
    const tripListRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (savedTrip) {
            tripListRef.current?.scrollTo({ behavior: 'smooth', top: tripListRef.current.scrollHeight })
            clearSavedtrip()
        }
    }, [savedTrip])

    return (
        <div className="main-overlay">
            <div className="header">
                <h1>Where in the world</h1>
                <div className="today">
                    <h2>Today</h2>
                    <div className="away-today">
                        <LocationAvatar
                            avatarUrl="https://ca.slack-edge.com/TSS5W8YQZ-U01403VS4MQ-6ae8013dc1bc-72"
                            country="ES"
                            personName="James"
                            locationText="Toledo, ES"
                        />
                        <LocationAvatar
                            avatarUrl="https://ca.slack-edge.com/TSS5W8YQZ-U018VMZBKQ8-a6b4316ff00a-48"
                            country="SE"
                            personName="Yakko"
                            locationText="Stockholm, SE"
                        />
                        <LocationAvatar
                            avatarUrl="https://ca.slack-edge.com/TSS5W8YQZ-U015X6QQN0N-b6ea1c7bb618-48"
                            country="PL"
                            personName="Michał"
                            locationText="Warsaw, PL"
                        />
                        <LocationAvatar
                            avatarUrl="https://ca.slack-edge.com/TSS5W8YQZ-U01403VS4MQ-6ae8013dc1bc-72"
                            country="BR"
                            personName="Marcus"
                            locationText="São Paulo, BR"
                        />
                    </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="trips" ref={tripListRef}>
                    <div className="flex-center">
                        <h2 style={{ flexGrow: 1 }}>My Trips</h2>
                        <Button onClick={toggleTripView}>
                            <FontAwesomeIcon icon={faPlusCircle} /> Add a trip
                        </Button>
                    </div>

                    <TripCard
                        tripMatches={[
                            {
                                avatarUrl: 'https://ca.slack-edge.com/TSS5W8YQZ-U015X6QQN0N-b6ea1c7bb618-48',
                                personName: 'Michael',
                            },
                        ]}
                    />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                </div>
                <div className="footer">
                    Home Location
                    <div>
                        <FontAwesomeIcon icon={faThumbtack} />
                        <b style={{ paddingLeft: 4 }}>Tartu, EE</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
