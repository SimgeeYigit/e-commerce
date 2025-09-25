import { useForm, Controller } from "react-hook-form"
import axios from "axios";
import {
    TextField,
    Input,
    FormHelperText,
    MenuItem,
    FormControl,
    InputLabel,
    IconButton,
    InputAdornment,
    OutlinedInput
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const api = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        control
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            repeat_password: "",
            role_id: "Customer",
            store: {
                name: "",
                phone: "",
                tax_no: "",
                bank_account: ""
            }
        },
        mode: "all"
    });

    const selectedRole = watch("role_id");
    const password = watch("password");

    useEffect(() => {
        api.get("/roles")
            .then(res => setRoles(res.data))
            .catch(err => console.error(err));
    }, []);

    const submitForm = async (formData) => {
        setLoading(true);

        const payload = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role_id: formData.role_id,
            ...(formData.role_id === "Store" && {
                store: {
                    name: formData.store.name,
                    phone: formData.store.phone,
                    tax_no: formData.store.tax_no,
                    bank_account: formData.store.bank_account,
                },
            }),
        };

        try {
            const response = await api.post("/signup", payload);
            console.log("Success:", response.data);
            alert("User created. Check your email for activation instructions.");
            history.goBack();
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Submit failed");
        } finally {
            setLoading(false);
        }
    };


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="flex flex-col items-center py-10">
                <form className="flex flex-col gap-5 py-[10px] px-[60px]" onSubmit={handleSubmit(submitForm)}>
                    <h1 className="font-montserrat font-bold text-[32px] text-center text-[#23A6F0] pb-4">Sign Up</h1>

                    {/* Name */}
                    <TextField
                        id="outlined-required"
                        label="Name"
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ""}
                        {...register("name", {
                            required: "Please enter your name",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters",
                            },
                        })}
                    />

                    {/* Email */}
                    <TextField
                        id="outlined-email"
                        label="Email"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                        {...register("email", {
                            required: "Please enter your email",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                    />

                    {/* Password */}
                    <FormControl variant="outlined" error={!!errors.password}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Please enter your password",
                                pattern: {
                                    value:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:
                                        "At least 8 chars, include uppercase, lowercase, number, special char",
                                },
                            })}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? "hide the password" : "display the password"}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                        <FormHelperText>
                            {errors.password ? (
                                <>
                                    At least 8 characters include uppercase,<br />
                                    lowercase, number, special char
                                </>
                            ) : ""}
                        </FormHelperText>
                    </FormControl>


                    {/* Repeat Password */}
                    <FormControl variant="outlined" error={!!errors.repeat_password}>
                        <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            {...register("repeat_password", {
                                required: "Please enter your password again",
                                validate: value =>
                                    value === password || "Passwords do not match"
                            })}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? "hide the password" : "display the password"}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Repeat Password"
                        />
                        <FormHelperText>
                            {errors.repeat_password && errors.repeat_password.message}
                        </FormHelperText>
                    </FormControl>

                    <Controller
                        name="role_id"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                label="Select Role"
                                helperText="Please select your role"
                            >
                                <MenuItem value="Customer">Customer</MenuItem>
                                <MenuItem value="Store">Store</MenuItem>
                                <MenuItem value="Admin">Admin</MenuItem>
                            </TextField>
                        )}
                    />

                    {selectedRole === "Store" && (
                        <>
                            {/* Store Name */}
                            <TextField
                                id="outlined-required"
                                label="Store Name"
                                error={!!errors.store?.name}
                                helperText={errors.store?.name ? errors.store.name.message : ""}
                                {...register("store_name", {
                                    required: "Please enter your store name",
                                    minLength: {
                                        value: 3,
                                        message: "Name must be at least 3 characters",
                                    },
                                })}
                            />

                            {/* Store Phone */}
                            <TextField
                                label="Store Phone"
                                id="outlined-start-adornment"
                                error={!!errors.store?.phone}
                                helperText={errors.store?.phone ? errors.store.phone.message : ""}
                                {...register("store_phone", {
                                    required: "Please enter your phone number",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Phone number must contain only numbers",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Phone number must be at least 10 digits",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Phone number cannot exceed 10 digits",
                                    },
                                })}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+90</InputAdornment>,
                                }}
                            />

                            {/* Store Tax ID */}
                            <TextField
                                label="Store Tax No"
                                {...register("store_tax_no", {
                                    required: "Format: TXXXXVXXXXXX",
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: "Must match format TXXXXVXXXXXX"
                                    }
                                })}
                                error={!!errors.store?.tax_no}
                                helperText={errors.store?.tax_no ? errors.store.tax_no.message : "Format: TXXXXVXXXXXX"}
                            />

                            {/* Store Bank Account */}
                            <TextField
                                label="Store Bank Account (IBAN)"
                                {...register("store_bank_account", {
                                    required: "IBAN is required",
                                    pattern: {
                                        value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{4}\d{2}$/,
                                        message: "Invalid TR IBAN format"
                                    }
                                })}
                                error={!!errors.store?.bank_account}
                                helperText={errors.store?.bank_account ? errors.store.bank_account.message : "Format: TRXXXXXXXXXXXXXXXXXXXXXXXX"}
                            />
                        </>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`border border-[#23A6F0] py-[15px] px-[40px] rounded-[5px] 
                bg-[#23A6F0] text-[#FFFFFF] font-bold text-base flex items-center justify-center gap-2
                ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                        Sign Up
                        {loading && (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                        )}
                    </button>
                    <p className="font-montserrat font-bold text-sm text-center">Already have an account?<span onClick={() => { history.push("/login") }} className="text-[#23A6F0] cursor-pointer"> Login</span> </p>
                </form>
            </div>
        </>
    )
}

export default SignUp;