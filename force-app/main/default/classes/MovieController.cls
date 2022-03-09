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

        @AuraEnabled(cacheable=true)
        public static List<Category__c> getCategories() {
            return [
                SELECT Name
                FROM Category__c
                WITH SECURITY_ENFORCED
                ORDER BY Name
            ];
        }

        @AuraEnabled(cacheable=true)
        public static List<Gender__c> getGender() {
            return [
                SELECT Name
                FROM Gender__c
                WITH SECURITY_ENFORCED
                ORDER BY Name
            ];
        }






}
