public with sharing class MovieController {
        @AuraEnabled(cacheable=true)
        public static List<Movie__c> getMovies() {
            return [
                SELECT Name
                FROM Movie__c
                WITH SECURITY_ENFORCED
                ORDER BY Name
            ];
        }
}
