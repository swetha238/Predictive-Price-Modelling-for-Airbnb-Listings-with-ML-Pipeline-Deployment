<script>
$(document).ready(function() {
    // Range slider functionality
    $('.range-slider').on('input', function() {
        var value = $(this).val();
        var valueDisplay = $('#' + $(this).attr('id') + 'Value');
        valueDisplay.text(value);
    });

    // Form submission with loading animation
    $('#predictionForm').on('submit', function() {
        $('#loading').show();
        $('.predict-button').prop('disabled', true);
    });

    // Countries list
    var countries = ['United States', 'Australia', 'Denmark', 'Ireland', 'United Kingdom', 'Hong Kong', 'Spain', 'France', 'Netherlands', 'Canada', 'Greece', 'Germany', 'Belgium', 'Italy', 'Austria', 'Switzerland'];

    // Cities list (abbreviated for performance)
    var cities = ['London', 'New York', 'Paris', 'Berlin', 'Madrid', 'Rome', 'Amsterdam', 'Vienna', 'Copenhagen', 'Dublin', 'Toronto', 'Vancouver', 'Sydney', 'Melbourne', 'Hong Kong', 'Barcelona', 'San Francisco', 'Los Angeles', 'Chicago', 'Boston', 'Seattle', 'Portland', 'Denver', 'Austin', 'Miami', 'Washington', 'Philadelphia', 'Atlanta', 'Phoenix', 'Las Vegas', 'San Diego', 'Nashville', 'New Orleans', 'Honolulu'];

    // Neighbourhoods list (abbreviated)
    var neighbourhoods = ['Williamsburg', 'Manhattan', 'Brooklyn Heights', 'Greenwich Village', 'SoHo', 'Chelsea', 'Westminster', 'Camden', 'Islington', 'Kensington', 'Montmartre', 'Le Marais', 'Saint-Germain', 'Champs-Élysées', 'Prenzlauer Berg', 'Mitte', 'Kreuzberg', 'Friedrichshain', 'Malasaña', 'Chueca', 'Gràcia', 'Eixample', 'Gothic Quarter', 'Centrum', 'Jordaan', 'De Pijp', 'Centro Storico', 'Trastevere', 'Monti', 'Testaccio'];

    var propertyTypes = ['Apartment', 'House', 'Condominium', 'Loft', 'Townhouse', 'Villa', 'Cabin', 'Guesthouse', 'Bed & Breakfast', 'Bungalow', 'Chalet', 'Hostel', 'Boat', 'Serviced apartment', 'Castle', 'Vacation home', 'Boutique hotel', 'Treehouse', 'Camper/RV', 'Tent', 'Guest suite', 'Yurt', 'Hut', 'In-law', 'Cave', 'Nature lodge', 'Entire Floor', 'Earth House', 'Tipi'];

    var cancellationPolicies = ['flexible', 'strict', 'moderate', 'moderate_new', 'flexible_new', 'strict_new', 'super_strict_60', 'super_strict_30', 'super_strict_30_new', 'super_strict_60_new'];

    // Initialize dropdowns with Selectize
    function initializeSelectize(elementId, optionList, placeholderText) {
        $(elementId).selectize({
            options: optionList.map(function(option) {
                return {
                    text: option,
                    value: option
                };
            }),
            placeholder: placeholderText,
            create: false,
            dropdownParent: 'body'
        });
    }
    
    // Initialize all dropdowns
    initializeSelectize('#country', countries, "Select Country");
    initializeSelectize('#city', cities, "Select City");
    initializeSelectize('#neighbourhood_cleansed', neighbourhoods, "Select Neighbourhood");
    initializeSelectize('#property_type', propertyTypes, "Select Property Type");
    initializeSelectize('#cancellation_policy', cancellationPolicies, "Select Cancellation Policy");

    // Set default values for radio buttons
    $('input[name="Room Type"][value="Entire home/apt"]').prop('checked', true);
    $('input[name="Bed Type"][value="Real Bed"]').prop('checked', true);
    $('input[name="Host Response Time"][value="within an hour"]').prop('checked', true);
});
</script>
