npx prisma format - weryfikuje plik schema.prisma i ew. uzupełnia pola
npx prisma migrate dev --name {model} - migruje modele

enum działa jak choices
enum UPDATE_STATUS {
IN_PROGRSS
SHIPPED
DEPRECATED
}

version String? - znak zapytania na końcu oznacza opcjonalne pole

npx prisma migrate reset - wywala bazę

npx prisma studio - podgląd danych