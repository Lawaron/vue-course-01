#!/bin/sh
if [ -z "$FIREBASE_TOKEN" ]; then
echo "Hiba: A FIREBASE_TOKEN környezeti változó nincs beállítva."
exit 1
fi

echo "Firebase bejelentkezés..."
firebase login --no-localhost --token "$FIREBASE_TOKEN"

echo "Firebase telepítés..."
firebase deploy --token "$FIREBASE_TOKEN"
