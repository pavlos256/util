var romanize = (function() {
"use strict";

// Transcription tables
// Tries to follow ELOT 2001, see https://en.wikipedia.org/wiki/Romanization_of_Greek
// Notes: converts Eta to H and Omega to O.

var twoLetterTT = {
	"ΑΥ": "AU", "Αυ": "Au", "Αύ": "Au", "αυ": "au", "αύ": "au",
	"ΕΥ": "EU", "Ευ": "Eu", "Εύ": "Eu", "ευ": "eu", "εύ": "eu",
	"ΟΥ": "OU", "Ου": "Ou", "Ού": "Ou", "ου": "ou", "ού": "ou"
};

var oneLetterTT = {
	"Α": "A", "Ά": "A", "α": "a", "ά": "a",
	"Β": "V", "β": "v",
	"Γ": "G", "γ": "g",
	"Δ": "D", "δ": "d",
	"Ε": "E", "Έ": "E", "ε": "e", "έ": "e",
	"Ζ": "Z", "ζ": "z",
	"Η": "H", "Ή": "H", "η": "h", "ή": "h",
	"Θ": "Th", "θ": "th",
	"Ι": "I", "Ί": "I", "ι": "i", "ί": "i", "ϊ": "i", "ΐ": "i",
	"Κ": "K", "κ": "k",
	"Λ": "L", "λ": "l",
	"Μ": "M", "μ": "m",
	"Ν": "N", "ν": "n",
	"Ξ": "X", "ξ": "x",
	"Ο": "O", "Ό": "O", "ο": "o", "ό": "o",
	"Π": "P", "π": "p",
	"Ρ": "R", "ρ": "r",
	"Σ": "S", "σ": "s", "ς": "s",
	"Τ": "T", "τ": "t",
	"Υ": "Y", "Ύ": "Y", "υ": "y", "ύ": "y", "ϋ": "y", "ΰ": "y",
	"Φ": "F", "φ": "f",
	"Χ": "Ch", "χ": "ch",
	"Ψ": "Ps", "ψ": "ps",
	"Ω": "O", "Ώ": "O", "ω": "o", "ώ": "o"
};

return function(text) {
	if (!text) return "";

	var offset = 0, left = text.length, output = "", t, r;
	while (left > 0)
	{
		if (left >= 2) {
			t = text.substr(offset, 2);
			r = twoLetterTT[t];
			if (r) {
				output += r;
				offset += 2;
				left -= 2;
				continue;
			}
		}

		t = text[offset];
		r = oneLetterTT[t];
		output += r ? r : t;
		offset++;
		left--;
	}

	return output;
};

})();
