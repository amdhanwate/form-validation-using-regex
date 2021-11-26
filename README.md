# Form Validation using Regular Expressions

### Demo Link: https://amdhanwate.github.io/form-validation-using-regex/index.html
### Tech Stack
- HTML
- CSS (Bootstrap)
- JS

### How is the form validated?
> Form is validated using the pattern attribute of input tags in HTML. This attribute specifies a
regular expression that the <input> element’s value is checked against after the submission
of the form.

### Regex’s used:
- **First Name:**
> First Name must start with a capital letter and must be at least two letters long. <br>
> **Regex:** `[A-Z][A-Za-z]{1,}`
- **Last Name:**
> Last Name must start with a capital letter and must be at least two letters long.
> **Regex:** `[A-Z][A-Za-z]{1,}`
- **Email:**
> Least satisfied email is of the form: mn@pq.co
> **Regex:** `[a-z]{1}[a-z0-9]{1,}@[a-z]{1}[a-z0-9]{1,}(\.[a-z]{1}[a-z0-9]{1,}){1,3}`
- **Phone:**
> Phone number must be 10 digits long and start with either 6, 7, 8 or 9
> **Regex:** `[6-9]{1}[0-9]{9}`
- **PRN:**
> PRN must start with 0 and be 10 digits long.
> **Regex:** `0[0-9]{9}`
